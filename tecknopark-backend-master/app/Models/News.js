'use strict'

const Model = use('Model')
const Database = use('Database')

class News extends Model {
	
	 static get visible () {
    return ['title']
  }
}

module.exports = News
