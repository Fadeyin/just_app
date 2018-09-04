'use strict'
const _ = use('lodash')
const uuidv1 = require('uuid/v1');
const Hash = use('Hash')
const Database = use('Database')
const Logger = use('Logger')
const News = use('App/Models/News')
const Response = use('App/Lib/Response')
const RestController = use('App/Lib/RestController')

class newsController {
	constructor () {
    this.rest = new RestController(News,
      {
        fieldList: 'title',
        sortable: ['title'],
        searchable: ['title'],
        softDeletes: true,
       /* defaultSortBy: 'username',
        highlightClass: 'primary',
        createdMessage: 'Пользователь создан',
        updatedMessage: 'Пользователь обновлен',
        deletedMessage: 'Пользователь удален',
        onAfterAnySave: async (data, original, rest, record, request) => {
          if (record.status === 'new') {
            record.status = 'active'
            record.save()
          }
        },
        onBeforeDelete: async (data, rest) => {
          data.email = '.' + uuidv1() + '.' + data.email
        }*/
      }
    )
  }
  async show ({ request, response }) {
    return this.rest.show(1, request, response)
  }
  /*async showNews ({ view, request, response }) {
    return this.rest.showNews(request.only(['title']), request, response)
  }
  async show1 ({view, request, response }) {
	  const title = request.get('title')
    return this.rest.show(request.only(['title']), request, response)
  }
   async showProfile ({ auth, request, response }) {
      return Response.genericData(
        response,
        this.publicProfile(auth.user.toJSON()))
    }*/
  }

  module.exports = newsController