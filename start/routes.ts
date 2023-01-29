import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'

Route.post('consultarBd', async () => {
  return Database.from('test_table').select('*')
})
