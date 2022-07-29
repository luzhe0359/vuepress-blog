import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c as o,a,b as t,e as c,d as n,r as l}from"./app.ce764160.js";const i={},u=c(`<blockquote><p>ios\u771F\u673A\u8C03\u8BD5\u9047\u5230\u7684\u56FE\u7247\u95EE\u9898\u6C47\u603B\u3002\u56FE\u7247\u4E0D\u663E\u793A(\u5DF2\u89E3\u51B3)\uFF0Cbase64\u56FE\u7247\u8FC7\u5927\u5BFC\u81F4\u9875\u9762\u5361\u4F4F(\u672A\u5B8C\u7F8E\u89E3\u51B3)\u3002\u6709\u6CA1\u6709\u5927\u4F6C\u9047\u5230\u7C7B\u4F3C\u95EE\u9898\u7684\uFF0C\u6551\u6551\u6211\uFF01\u{1F62D}\u{1F62D}</p></blockquote><p>\u6700\u8FD1\u5728\u7528vue\u5F00\u53D1\u4F01\u4E1A\u5FAE\u4FE1\u79FB\u52A8\u7AEF\u9879\u76EE\uFF0C\u771F\u673A\u8C03\u8BD5\u65F6\uFF0C\u5B89\u5353\u3001\u9E3F\u8499\u7CFB\u7EDF\u663E\u793A\u6B63\u5E38\uFF0C\u82F9\u679C\u7CFB\u7EDF\u9047\u5230\u70B9\u5C0F\u95EE\u9898\u3002\u5982\u4E0B\uFF1A</p><h2 id="\u4E00\u3001\u56FE\u7247\u4E0D\u663E\u793A" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u56FE\u7247\u4E0D\u663E\u793A" aria-hidden="true">#</a> \u4E00\u3001\u56FE\u7247\u4E0D\u663E\u793A</h2><h3 id="_1-\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#_1-\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> 1. \u95EE\u9898\u63CF\u8FF0</h3><p>\u7528<code>vant</code>\u6846\u67B6\u505A<strong>\u4E0B\u62C9\u5237\u65B0</strong>\u529F\u80FD\uFF0C\u4F7F\u7528<strong>\u81EA\u5B9A\u4E49\u63D0\u793A</strong>\uFF0C\u62F7\u8D1D\u5B98\u7F51demo\u5230\u9879\u76EE\u4E2D\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-pull-refresh</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isLoading<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:head-height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>80<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@refresh</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onRefresh<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u4E0B\u62C9\u63D0\u793A\uFF0C\u901A\u8FC7 scale \u5B9E\u73B0\u4E00\u4E2A\u7F29\u653E\u6548\u679C --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#pulling</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>props<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doge<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://img01.yzcdn.cn/vant/doge.png<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ transform: \`scale(\${props.distance / 80})\` }<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- \u91CA\u653E\u63D0\u793A --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#loosing</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doge<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://img01.yzcdn.cn/vant/doge.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- \u52A0\u8F7D\u63D0\u793A --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#loading</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doge<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://img01.yzcdn.cn/vant/doge-fire.jpg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u5237\u65B0\u6B21\u6570: {{ count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-pull-refresh</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.doge</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 140px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 72px<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PS: \u771F\u5B9E\u9879\u76EE\u4E2D\u4EC5\u4FEE\u6539\u4E86\u56FE\u7247\u8DEF\u5F84\u3002 \u90E8\u7F72\u5230\u6D4B\u8BD5\u73AF\u5883\uFF0C\u5B89\u5353\u3001\u9E3F\u8499\u3001windows\u6B63\u5E38\u663E\u793A\uFF0C\u4F46ios\u3001mac\u4E0D\u663E\u793A\u3002</p><h3 id="_2-\u771F\u673A\u8C03\u8BD5" tabindex="-1"><a class="header-anchor" href="#_2-\u771F\u673A\u8C03\u8BD5" aria-hidden="true">#</a> 2. \u771F\u673A\u8C03\u8BD5</h3><p>\u4F7F\u7528mac\u5728\u4F01\u4E1A\u5FAE\u4FE1\u5BA2\u6237\u7AEF\u901A\u8FC7\u8C03\u8BD5\u53D1\u73B0\uFF0C\u56FE\u7247dom\u5B58\u5728\uFF0C\u4F46\u67E5\u627E\u5143\u7D20\u65F6\uFF0C\u9875\u9762\u4E2D\u627E\u4E0D\u5230\u3002</p><h3 id="_3-\u89E3\u51B3\u529E\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-\u89E3\u51B3\u529E\u6CD5" aria-hidden="true">#</a> 3. \u89E3\u51B3\u529E\u6CD5</h3><p>\u89E3\u51B3\u529E\u6CD5\u6709\u4E24\u79CD\uFF1A</p><ul><li>\u80CC\u666F\u56FE \u5728\u56FE\u7247\u4F4D\u7F6E\u653E\u7F6E\u4E00\u4E2Adiv\u5E76\u8BBE\u7F6E\u597D\u5BBD\u9AD8\uFF0C\u5C06\u5176\u8BBE\u7F6E\u80CC\u666F\u56FE\u7247(\u80CC\u666F\u56FE\u5BBD\u9AD8\u8BBE\u7F6E\u4E3A100%)</li><li>img\u6807\u7B7E \u5728\u56FE\u7247\u4F4D\u7F6E\u653E\u7F6E\u4E00\u4E2Adiv\u5E76\u8BBE\u7F6E\u597D\u5BBD\u9AD8\uFF0C\u5728\u5176\u5185\u90E8\u6DFB\u52A0img\u6807\u7B7E(\u5BBD\u9AD8\u8BBE\u7F6E\u4E3A100%) \u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528<code>vant</code>\u81EA\u5E26\u7684<code>van-image</code>\u7EC4\u4EF6\uFF0C\u6700\u7EC8\u4F1A\u89E3\u6790\u5982\u4E0A\u683C\u5F0F</li></ul><h2 id="\u4E8C\u3001base64\u5BFC\u81F4\u9875\u9762\u5361\u5D29" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001base64\u5BFC\u81F4\u9875\u9762\u5361\u5D29" aria-hidden="true">#</a> \u4E8C\u3001base64\u5BFC\u81F4\u9875\u9762\u5361\u5D29</h2><h3 id="_1-\u95EE\u9898\u63CF\u8FF0-1" tabindex="-1"><a class="header-anchor" href="#_1-\u95EE\u9898\u63CF\u8FF0-1" aria-hidden="true">#</a> 1. \u95EE\u9898\u63CF\u8FF0</h3><p>\u56E0\u4E3A\u5185\u7F51\u5F00\u53D1\u7684\u9650\u5236\uFF0C\u9700\u8981\u5C06\u56FE\u7247\u5904\u7406\u4E3Abase64\uFF0C\u624D\u53EF\u4EE5\u5728\u5916\u7F51\u5C55\u793A\u3002 ios/mac\u5207\u6362\u5230\u56FE\u7247\u8F83\u591A\u7684\u9875\u9762\u65F6\uFF0C\u4F1A\u51FA\u73B0\u5361\u5D29\u7684\u60C5\u51B5\u3002\u5176\u5B9E\u4E5F\u6CA1\u6709\u5D29\uFF0C\u5F97\u7B49\u4E2A\u5341\u6765\u5206\u949F\u624D\u53EF\u4EE5\u64CD\u4F5C\u754C\u9762\u3002(\u7AD9\u5728\u7528\u6237\u89D2\u5EA6\uFF1A\u548C\u5361\u5D29\u6CA1\u4EC0\u4E48\u533A\u522B\u{1F480}\u{1F480})</p><h3 id="_2-\u771F\u673A\u8C03\u8BD5-1" tabindex="-1"><a class="header-anchor" href="#_2-\u771F\u673A\u8C03\u8BD5-1" aria-hidden="true">#</a> 2. \u771F\u673A\u8C03\u8BD5</h3><p>\u5728\u4F01\u4E1A\u5FAE\u4FE1\u5BA2\u6237\u7AEF\u901A\u8FC7\u8C03\u8BD5\u53D1\u73B0\uFF0C\u56FE\u7247\u8F6C\u6362\u4E3Abase64\u540E\uFF0C\u4F53\u79EF\u8F83\u5927\uFF0C\u5BFC\u81F4\u754C\u9762\u5361\u5D29\u3002</p><h3 id="_3-\u89E3\u51B3\u529E\u6CD5-1" tabindex="-1"><a class="header-anchor" href="#_3-\u89E3\u51B3\u529E\u6CD5-1" aria-hidden="true">#</a> 3. \u89E3\u51B3\u529E\u6CD5</h3><ul><li>\u540E\u7AEF\u5C06\u56FE\u7247\u538B\u7F29\u5904\u7406\u4E0D\u8D85\u8FC7200k</li></ul><h3 id="_4-\u65B0\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_4-\u65B0\u7684\u95EE\u9898" aria-hidden="true">#</a> 4. \u65B0\u7684\u95EE\u9898</h3><ul><li>\u4F53\u79EF\u8F83\u5927\u7684\u56FE\u7247\uFF0C\u538B\u7F29\u540E\u6A21\u7CCA\u3001\u4E0D\u6E05\u6670</li><li>gif\u56FE\u7247\u538B\u7F29\u5230\u4E00\u5B9A\u6BD4\u4F8B\u540E\uFF0C\u6210\u4E3A\u4E86\u9759\u6001\u56FE \u{1F605}\u{1F923}\u{1F602}</li></ul><p>\u867D\u7136\u4ECD\u5B58\u5728\u4E00\u7CFB\u5217\u65B0\u95EE\u9898\uFF0C\u4F46\u8FD9\u4E5F\u6BD4\u9875\u9762\u5361\u4F4F\u5361\u5D29\u5F3A\u4E00\u4E07\u500D\uFF0C\u8D1F\u8D23\u4EBA\u9ED8\u9ED8\u5730\u63A5\u53D7\u4E86\u8FD9\u4E2A\u7ED3\u679C\u3002</p><h2 id="\u4E09\u3001\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u603B\u7ED3" aria-hidden="true">#</a> \u4E09\u3001\u603B\u7ED3</h2><p>\u4EE5\u4E0A\u662F\u6211\u80FD\u591F\u60F3\u5230\u7684\u4E00\u4E9B\u89E3\u51B3\u529E\u6CD5\u3002 base64\u95EE\u9898\uFF0C\u5404\u4F4D\u5927\u4F6C\u5982\u6709\u66F4\u597D\u7684\u529E\u6CD5\uFF0C\u6B22\u8FCE\u7559\u8A00\u652F\u62DB\u3002\u4E07\u5206\u611F\u8C22\uFF01\uFF01 \u{1F64F}\u{1F64F}\u{1F64F}</p>`,24),r=n("\u672C\u6587\u9996\u53D1\u4E8E"),d={href:"https://zugelu.com/",target:"_blank",rel:"noopener noreferrer"},k=n("\u8DB3\u5404\u8DEF\u7684\u535A\u5BA2"),h=n("\uFF0C\u540E\u7EED\u4F1A\u540C\u6B65\u66F4\u65B0\u5230"),g={href:"https://juejin.cn/user/1151943917971031",target:"_blank",rel:"noopener noreferrer"},v=n("\u6398\u91D1"),m=n("\u3001"),b={href:"https://blog.csdn.net/weixin_44388523",target:"_blank",rel:"noopener noreferrer"},_=n("CSDN"),q=n("\u3002"),f=a("strong",null,"\u5173\u6CE8\u8DB3\u5404\u8DEF\u3001\u524D\u7AEF\u4E0D\u8FF7\u8DEF\uFF01",-1);function x(y,N){const s=l("ExternalLinkIcon");return p(),o("div",null,[u,a("p",null,[r,a("a",d,[k,t(s)]),h,a("a",g,[v,t(s)]),m,a("a",b,[_,t(s)]),q,f])])}var V=e(i,[["render",x],["__file","220728.html.vue"]]);export{V as default};
