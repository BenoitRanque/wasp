
exports.up = async function(knex, Promise) {
  await knex.schema.withSchema('public').createTable('hr_att_break', table => {
    table.uuid('break_id').primary().defaultTo(knex.raw('public.gen_random_uuid()'))
    table.uuid('schedule_id')
    table.integer('timetype_id').notNullable()
    table.time('start_time')
    // table.specificType('start_time', 'TIME(6) WITH TIME ZONE')
    table.boolean('start_require_event')
    table.time('end_time')
    // table.specificType('end_time', 'TIME(6) WITH TIME ZONE')
    table.boolean('end_require_event')
    table.specificType('duration', 'INTERVAL')
    
    table.timestamps()

    table.foreign('schedule_id').references('schedule_id').inTable('hr_att_schedule').onUpdate('CASCADE').onDelete('CASCADE')
    table.foreign('timetype_id').references('timetype_id').inTable('hr_att_timetype').onUpdate('CASCADE').onDelete('RESTRICT')
  })
};

exports.down = async function(knex, Promise) {
  await knex.schema.withSchema('public').dropTable('hr_att_break')
};