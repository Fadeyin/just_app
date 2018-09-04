<template>
  <div>
    <vue-good-table
      title="Demo Table"
      :columns="columns"
      :rows="rows"
      :paginate="true"
      :lineNumbers="true"/>
  </div>
</template>
 
<script>
export default {
  name: 'test',
  data() {
    return {
      columns: [
        {
          label: 'ФИО',
          field: 'name',
          filterable: true,
        },
        {
          label: 'Права доступа',
          field: 'level',
          type: 'number',
          html: false,
          filterable: true,
        },
        {
          label: 'Email',
          field: 'email',
          filterable: true,
        },
      ],
      rows: [
        {
		id: 1,
		name: "John",
		level: 20,
		email: "g@m.ru",
		}
      ],
    };
  },
};
</script>