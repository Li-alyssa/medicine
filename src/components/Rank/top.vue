<template>
  <div class="top-bg">
    <div class="input-container">
      <div class="select-wrap">
        <el-input
          class="input"
          placeholder="请输入内容"
          v-model="input"
          clearable
          @keyup.enter.native="handleSearch()"
        >
        </el-input>
        <div class="search" @click="handleSearch">搜索</div>
      </div>
    </div>
    <div class="suggest">
      热门搜索
      <span v-for="item in goodList">
        <router-link
          :to="'/product/' + item.id + '/' + item.name"
          class="tags"
          >{{ item.name }}</router-link
        >
      </span>
    </div>
    <div class="bottom-container">
      <div class="title-container">
        <div class="title-border">
          <div>
            <span>中药大品种科技竞争力排行榜</span>
            <span>RANKINGS</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      goodList: [],
    };
  },
  mounted() {
    this.getProductInfo();
  },
  methods: {
    //首页搜索
    async handleSearch() {
      this.$router.push({
        name: "goods",
        params: {
          input: this.input,
        },
      });
      // const data = {
      //   name: this.input,
      // };
      // try {
      //   let result = await this.$API.reqGetProductList(data);
      //   // this.goodList = result.response.list;
      //   console.log(result);

      // } catch (error) {
      //   console.log(error.message);
      // }
    },

    async getProductInfo() {
      const data = {
        pageNum: 1,
        pageSize: 5,
      };
      try {
        let result = await this.$API.reqGetProductList(data);
        this.goodList = result.response.list.slice(0, 4);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style scoped>
.top-bg {
  position: relative;
  background: url(https://www.shanghairanking.cn/_nuxt/img/bj1.51928e3.jpg);
  background-size: cover;
  height: 250px;
  padding-top: 130px;
}

.input-container {
  display: flex;
  align-items: center;
  background-color: rgba(96, 110, 231, 0.6);
  width: 660px;
  height: 80px;
  border-radius: 8px;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
}

.select-wrap {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
}

.input {
  height: 55px;
  line-height: 55px;
  width: 550px;
  margin-left: 12px;
  padding: 0 10px;
  color: #333;
  border: none;
  border-radius: 8px;
  font-size: 16px;
}
.input:focus {
  outline: none;
}
.search {
  font-size: 18px;
  color: #fff;
  letter-spacing: 0;
  text-align: center;
  padding: 10px 15px;
  margin-left: 3px;
  cursor: pointer;
}

.suggest {
  height: 34px;
  overflow: hidden;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.suggest .tags {
  height: 20px;
  overflow: hidden;
  display: inline-block;
  padding: 7px 10px;
  border-radius: 4px;
  background-color: #123456;
  color: #fff;
  margin-left: 15px;
}

.bottom-container {
  position: absolute;
  bottom: 0;
  height: 60px;
  width: 100%;
}

.title-container {
  height: 36px;
  padding-top: 24px;
  width: 1070px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fff;
  border-radius: 8px 8px 0 0;
  margin-right: auto;
  margin-left: auto;
}
.title-border {
  border-bottom: 1px solid #d7d7d7;
  overflow: hidden;
  height: 32px;
  line-height: 32px;
}
.title-container div span:first-child {
  float: left;
  font-size: 24px;
  color: #333;
  letter-spacing: 0;
}
.title-container div span:last-child {
  float: right;
  margin-left: 18px;
  font-size: 18px;
  color: #aeaeae;
  letter-spacing: 0;
}

@media screen and (min-width: 895px) and (max-width: 1210px) {
  .input-container {
    width: 90%;
  }

  .input {
    width: 100%;
  }

  .title-container {
    width: 80%;
  }
}
@media screen and (max-width: 894px) {
  .input-container {
    width: 90%;
  }
  .suggest {
    width: 90%;
    height: 50px;
    font-size: 12px;
    margin-left: auto;
    margin-right: auto;
  }

  .suggest .tags {
    height: 100%;
    padding: 7px 10px;
    margin-left: 12px;
  }
  .input {
    width: 83%;
  }
  .title-container {
    width: 80%;
  }
}
</style>