window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// Android7 条码枪兼容性脚本
(function() {
  console.log('开始注入兼容性脚本');
  
  // 1. 修复 append 方法
  if (!Element.prototype.append) {
    Element.prototype.append = function() {
      for (var i = 0; i < arguments.length; i++) {
        var node = arguments[i];
        if (typeof node === 'string') {
          this.appendChild(document.createTextNode(node));
        } else if (node instanceof Node) {
          this.appendChild(node);
        }
      }
    };
  }
  
  // 2. 确保 jQuery 工具函数存在
  if (window.jQuery && !jQuery.t1) {
    jQuery.t1 = { utils: {} };
    if (!jQuery.t1.utils.guid) {
      jQuery.t1.utils.guid = function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      };
    }
    if (!jQuery.t1.ajax) {
      jQuery.t1.ajax = jQuery.ajax;
    }
  }
  
  // 3. 简化版登录功能
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM加载完成');
    
    // 确保登录按钮可点击
    var loginBtn = document.getElementById('btn_submit');
    if (loginBtn) {
      loginBtn.onclick = function() {
        var form = document.querySelector('form');
        if (form) {
          // 尝试加密
          if (typeof cmdEncrypt === 'function') {
            try { cmdEncrypt(); } catch(e) { console.warn('加密失败:', e); }
          }
          form.submit();
        }
      };
    }
    
    // 显示隐藏的内容
    setTimeout(function() {
      var content = document.getElementById('login_content');
      var loading = document.getElementById('login_loading');
      if (content) content.style.display = 'block';
      if (loading) loading.style.display = 'none';
    }, 1000);
  });
  
  // 4. 错误捕获
  window.addEventListener('error', function(e) {
    console.error('脚本错误:', e.message);
    return true; // 阻止错误传播
  });
})();