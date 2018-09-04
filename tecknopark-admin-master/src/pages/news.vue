<template>
  <div>
<vue-good-table
  title="Dynamic Table"
  :columns="columns"
  :rows="rows"
  :lineNumbers="true"
  :paginate="true">
	</vue-good-table>
  </div>
</template>
 
<script type="text/babel">
import _ from 'lodash'
import { mapMutations } from 'vuex'
import Api from '@/api'
export default {
  name: 'news',
  data() {
    return {
      columns: [
        {
          label: 'Заголовок',
          field: 'title',
          filterable: true,
        },
		{
          label: 'id',
          field: 'idd',
          html: false,
          filterable: true,
        },
      ],
      rows: [{id: 1, title: this.getNews.title}],
    }
	},
	mounted () {
      this.getNews()
    },
	methods: {
	getNews () {
        Api.rest({
          url: 'news',
          method: 'get'
        })
          .then(response => {
            this.rows = response.data
          })
      }
	},
  };

</script>
