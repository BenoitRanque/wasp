
exports.up = async function(knex, Promise) {
  await knex.schema.withSchema('public').createTable('core_roles', table => {
    table.uuid('role_id').unique().notNullable().primary().defaultTo(knex.raw('public.gen_random_uuid()'))
    table.text('role_name').unique().notNullable()
    table.text('description')

    table.timestamps()
  })
}

exports.down = async function(knex, Promise) {
  await knex.schema.withSchema('public').dropTable('core_roles')
}