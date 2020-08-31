<template>
  <div id="user-info">
    <a href="#" class="clear-fix">
      <slot name="user-icon">
      <img :src="photo" alt="" class="privateImage-svg left">
      </slot>
      <div class="login-info left">
        <slot name="user-nickname">
          <div>登录/注册</div>
        </slot>
        <div class="phone">
          <span>
            <img :src="phone" class="icon-mobile" alt="">
          </span>
          <slot name="user-phone">暂无绑定手机号</slot>
        </div>
      </div>
      <img :src="right" alt="" class = "arrow-svg right">
    </a>
  </div>
</template>

<script>
import photo from "@/assets/images/profile/photo.svg"
import phone from "@/assets/images/profile/phone.svg"
import right from "@/assets/images/profile/right.svg"
export default {
  name: 'login',
  data () {
    return {
      photo:photo,
      phone:phone,
      right:right
    }
  }
}
</script>

<style scoped>
#user-info {
    background-color: var(--color-tint);
    padding: 15px;
    margin-top: 44px;
  }

  #user-info .privateImage-svg {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 30px;
  }

  .left {
    float: left;
  }

  .go{
    width:18px;
    height:18px;
    background: red;
  }

  #user-info .arrow-svg {
    width: 22px;
    height: 22px;
    margin-top: 18px;
  }

  #user-info .login-info {
    color: #fff;
    margin: 10px 0 0 10px;
  }

  #user-info .login-info .phone {
    position: relative;

    font-size: 13px;
    margin-top: 5px;
    margin-left: 15px;
    font-weight: 300;
  }

  #user-info .login-info .phone .icon-mobile {
    position: absolute;
    width: 24px;
    height: 18px;
    left: -20px;
    top: 0px;
  }
</style>
