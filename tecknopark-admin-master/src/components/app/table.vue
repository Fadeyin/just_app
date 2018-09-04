<template lang="html">
  <div>
    <vu-table :rows="rows">

      <vu-table-column prop="id" title="ID">
        <template slot-scope="{ row }"> 
          <b>{{ row.id }}</b>
        </template>
      </vu-table-column>

      <vu-table-column prop="name" title="Name"/>

      <vu-table-column prop="rating" title="Rating">
        <template slot-scope="{ row, items }"> 
          {{ row.rating }} 
          <b v-if="items.every(item => item.rating <= row.rating)">Best choiсe!</b>
        </template>
      </vu-table-column>

    </vu-table>
  </div>
</template>

<script>
export default {
  name: 'example-page',
  data() {
    return {
      rows: [
        { id: 1,
          name: 'Sony',
          rating: 777 },
        { id: 2,
          name: 'Apple',
          rating: 555 },
        { id: 3,
          name: 'Samsung',
          rating: 333 }
      ]
    }
  }
};
</script>