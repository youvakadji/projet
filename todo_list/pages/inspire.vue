<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="add">
      <button
        type="button"
        class="addM"
        @click="addMore()"
      >
        Add More
      </button>
      <div v-for="value in values" :key="value" >
        <div  class="content">
          <div>
            <div class="top">
              <select class="select" v-model="value.value3" style="color: azure;" >
                <option disabled value="">Please select one</option>
              </select>
              <input
              v-model="value.title"
              placeholder="Title"
              class="title"
              style="color: azure;"
              />
            </div>
            <div style="width: 100vh;">{{ new Date() }}</div>
            <input
              v-model="value.describe"
              placeholder="Describe"
              class="describe"
              style="color: azure;"
            />
          </div>
          
          <button
            type="button"
            class="remove"
            @click="remove(value)"
            v-show="index != 0"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      values: localStorage.getItem("task") ? JSON.parse(localStorage.getItem('task')): [] ,
          title: '',
          describe: '',
          value3: '',

      
    };
  },
  watch: {
        values(newValue) {
            var parsed = JSON.stringify(newValue)
            localStorage.setItem("task", parsed)
            newValue = JSON.parse(localStorage.getItem('task'))
        }
    },
  
  methods: {
    addMore() {
      this.values.push({
        title: this.title,describe:this.describe,value3:this.value3,
      });
      // localStorage.setItem('task', JSON.stringify(this.values));
      // console.log(this.values);
    },
    remove(index) {
      this.values.splice(this.values.indexOf(index), 1);
      // localStorage.setItem('task', JSON.stringify(this.values));
      // console.log(this.values);
    },
    
  },

  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.add {
  text-align: center;
}
.addM {
  padding: 5px;
  border: groove;
  background-color: green;
}
.addM:hover {
  width:200px;
    height:40px;
    border-radius:40px;
    background-color:rgb(33, 192, 33);
    color: white;
}

.content {
  text-align: center;
  border: groove;
  margin-top: 20px ;
}
.title{
  margin-left: 10px;
  border: groove;
  height: 50px;
  width: 680px;
}
.describe{
  border: groove;
  height: 150px;
  width: 900px;
  margin-top: 20px;
  margin: 15px;
  padding-bottom: 100px;
}

.select {
  border: groove;
  height: 50px;
  width: 200px;
  text-align: center;
}

.top {
  padding-bottom: 35px ;
  padding-top: 15px;
}
.remove {
  border: groove;
  padding: 5px;
  background-color: rgb(122, 6, 6);
  margin-left: 800px;
  margin-bottom: 15px;
}

.remove:hover  {
  width:200px;
    height:40px;
    border-radius:40px;
    background-color:red;
    color: white;
    margin-left: 700px;
    margin-bottom: 20px;
}

</style>
