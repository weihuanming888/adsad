<template>
  <div>
    <div class="ui">
      <div class="app-container">
        <el-tabs v-model="activeName">
          <el-tab-pane label="表单" name="rulesPane" @tab-click="handleClick">
            <!-- 表单 -->
            <el-form ref="rulesForm" :rules="formRules" :model="rulesForm" label-width="200px">
              <el-form-item label="用户名称:" prop="userName">
                <el-input v-model="rulesForm.userName" style="width:300px" maxlength="50" />
              </el-form-item>
              <el-form-item
                label="银行名称:"
                prop="accountName"
                :rules="[{required:true,message:'请输入银行名称',trigger:'blur'}]"
              >
                <el-input v-model="rulesForm.accountName" style="width:300px" maxlength="50" />
              </el-form-item>
              <el-form-item label="银行卡号:" prop="accountNumber">
                <el-input v-model="rulesForm.accountNumber" style="width:300px" maxlength="50" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit('rulesForm')">保存</el-button>
                <el-button @click="cancel">取消</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { validateAccountNumber } from "./ru";

// 判断银行卡账户是否正确
const validatorAccountNumber = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("请输入账户信息"));
  } else {
    if (validateAccountNumber(value)) {
      callback();
    } else {
      return callback(new Error("账号格式不正确"));
    }
  }
};

export default {
  name: "rules",

  data() {
    return {
      activeName: "rulesPane",
      defaultProps: {
        children: "children",
        label: "label"
      },
      rulesForm: {},
      //   表单验证
      formRules: {
        userName: [
          {
            required: true,
            message: "请输入用户名称",
            trigger: "blur"
          }
        ],
        accountNumber: [
          {
            required: true,
            validator: validatorAccountNumber,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleClick(tab) {},
    // 取消
    cancel() {},
    // 保存
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("success submit!!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style>
</style>