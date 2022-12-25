<template>
  <div class="me-footer">
    <div class="page-tail">
      <div style="text-align: center">
        <div class="tail-part1">
          <div class="part1">
            <div>
              <div>服务热线:</div>
              <p style="color: #fff">010-84099077</p>
            </div>
            <div>
              定制开发与商务合作：
              <p style="color: #fff">15313953779</p>
            </div>
          </div>
          <div class="part2">
            <!--            微信公众号:-->

            <span style="display: flex">
              <img
                style="margin-right: 10px"
                src="@/assets/gongzhonghao2.jpg"
                height="130"
                width="130"
              />
              <img src="@/assets/gongzhonghao.jpg" height="130" width="130" />
            </span>
          </div>
          <div class="part3">
            <br />
            <p style="color: #fff; margin-top: 5px">
              友情链接：
              <a href="http://www.nhc.gov.cn/">国家卫健委</a>
              <a href="http://www.satcm.gov.cn/">国家中医药管理局</a>
              <a href="https://www.nmpa.gov.cn/">国家药监局</a>
              <a href="http://www.nhsa.gov.cn/">国家医保局</a>
              <a href="https://www.ndrc.gov.cn/?code=&state=123">发改委</a>
              <a href="http://www.moa.gov.cn/">农村农业部</a>
              <a href="https://www.miit.gov.cn/">工信部</a>
              <a href="http://www.most.gov.cn/index.html">科学技术部</a>
              <a href="http://www.mofcom.gov.cn/">商务部</a>
              <a href="http://www.mohrss.gov.cn/">人社部 </a>
              <a href="https://www.mct.gov.cn/">文化和旅游部</a>
            </p>
          </div>
        </div>
      </div>
      <div style="text-align: center; margin: 10px auto; font-size: 0.8rem">
        联系我们
        <div style="color: #fff; padding: 5px 0">
          地址：北京市东城区东直门外斜街甲42号宏天商务中心
          商务合作：bbtcml@163.com
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>


<style scoped>
.me-footer {
  background-color: #f4f3f4;
}

.page-tail {
  width: 100%;
  color: #fff;
  padding-top: 30px;
  background: url("@/assets/page_tail.png") no-repeat;
  background-size: cover;
  margin: 0 auto;
  margin-top: 20px;
}

.tail-part1 {
  width: 50%;
  /*height:100px;*/
  margin: 0 auto;
  /*padding: 3px 0;*/
  /*text-align: center;*/
  display: flex;
  justify-content: space-around;
  border-bottom: solid 1px #fff;
}

.part1 {
  width: 260px;
  font-size: 1rem;
  padding: 20px 10px 20px 60px;
  text-align: left;
}
.part2 {
  width: 280px;
  margin-bottom: 10px;
}

.part3 {
  width: 600px;
  margin-top: 20px;
  margin-left: 50px;
  margin-right: 40px;
}
a {
  margin-right: 5px;
  color: #fff;
}

@media screen and (min-width: 1350px) and (max-width: 1520px) {
  /* .page-tail {
    width: 100%;
  } */

  .tail-part1 {
    /* transform: scale(1); */
    width: 50%;
    /* display: flex;
    flex-direction: column; */
  }
  .part1 {
    width: 20%;
    font-size: 1rem;
    padding: 0;
    text-align: center;
    margin: auto;
    /* background-color: red; */
  }
  .part2 {
    width: 40%;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    /* background-color: blue; */
  }

  .part3 {
    width: 40%;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    /* background-color: green; */
  }
}
@media screen and (min-width: 1000px) and (max-width: 1350px) {
  .tail-part1 {
    width: 70%;
  }
  .part1 {
    width: 20%;
    font-size: 1rem;
    padding: 0;
    text-align: center;
    margin: auto;
  }
  .part2 {
    width: 40%;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
  }

  .part3 {
    width: 40%;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (min-width: 850px) and (max-width: 1000px) {
  .tail-part1 {
    width: 80%;
  }
  .part1 {
    width: 20%;
    font-size: 1rem;
    padding: 0;
    text-align: center;
    margin: auto;
  }
  .part2 {
    width: 40%;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
  }

  .part3 {
    width: 40%;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (min-width: 600px) and (max-width: 850px) {
  .tail-part1 {
    width: 90%;
  }

  .part1 {
    width: 20%;
    font-size: 0.5rem;
    padding: 0;
    text-align: center;
    margin: auto;
  }
  .part2 {
    transform: scale(0.8);
    width: 50%;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
  }

  .part3 {
    width: 40%;
    font-size: 0.5rem;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }
}
@media screen and (min-width: 500px) and (max-width: 600px) {
  .tail-part1 {
    width: 90%;
  }

  .part1 {
    width: 20%;
    font-size: 0.5rem;
    padding: 0;
    text-align: center;
    margin: auto;
  }
  .part2 {
    transform: scale(0.6);
    width: 50%;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
  }

  .part3 {
    width: 40%;
    font-size: 0.5rem;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (max-width: 500px) {
  .tail-part1 {
    width: 100%;
  }

  .part1 {
    width: 40%;
    font-size: 1rem;
    padding: 0;
    text-align: center;
    margin: auto;
  }
  .part2 {
    transform: scale(0.8);
    width: 50%;
    margin-top: 20px;
    margin-bottom: 10px;
    /* margin-left: auto;
    margin-right: auto; */
  }

  .part3 {
    display: none;
    width: 30%;
    font-size: 0.6rem;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>