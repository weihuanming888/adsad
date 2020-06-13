<template>
  <div>
    <van-nav-bar title="编辑资料" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <input type="file" ref="file" hidden />
      <van-cell is-link title="头像" @click="avtar" @change="fileChange" />
      <van-image class="touxiang" round width="1.3rem" height="1.3em" />
      <van-cell is-link title="单元格" value="内容" />
      <van-cell is-link title="单元格" value="内容" />
      <van-cell is-link title="单元格" value="内容" />
      <van-cell is-link title="单元格" value="内容" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    file() {
      return this.$refs["file"];
    }
  },
  methods: {
    onClickLeft() {},
    avtar() {
      // 手动触发input点击事件
      this.file.click();
    },
    fileChange() {
      // 1.拿到file类型 input选择的文件
      // 2.使用window.URL.creatObjectURL(file) 得到文件数据
      // 3.讲img.src=window.URL.creatObjectURL(file)
      let fileObj = this.file.files[0];
      console.log(fileObj);
    }
  }
};
</script>

<style>
.touxiang {
  position: absolute;
  z-index: 1;
  right: 30px;
  top: 8px;
}
</style>