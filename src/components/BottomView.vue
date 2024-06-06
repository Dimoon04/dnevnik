<template>
  <div class='footer-end'>
    <el-footer>
      <div class="footer-container">
        <div class="footer-content">
          <div class="left-content">
            <img src="@/assets/logo.png" alt="Online Diary" class="logo" />
            <span class="copyright">© 2024 Амыртаа Айзана.</span>
          </div>
          <div class="right-content">
            <span class="copyright">Все права защищены.</span>
          </div>
        </div>
      </div>
    </el-footer>  
  </div>
    
  </template>
  
  <script>
  export default {
    name: 'AppFooter'
  }
  </script>
  
  <style scoped>
  .footer-end{
    flex-grow: 1;
    /* flex-shrink: 0; */
  }
  .el-footer {
    background-color: #ffffff;
    color: #272727;
    height: 100%;
    /* padding: 20px 0; */
  }
  
  .footer-container {
    flex-shrink: 0;

    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .left-content {
    display: flex;
    align-items: center;
  }
  
  .logo {
    height: 2vmax;
    margin-right: 2vw;
  }
  
  .copyright {
    font-size: 1.3vmax;
  }
  
  .right-content {
    display: flex;
    align-items: center;
  }
  
  .footer-link {
    font-size: 14px;
    margin-left: 20px;
    color: #fff;
  }
  
  .footer-link:hover {
    color: #409EFF;
  }
  </style>