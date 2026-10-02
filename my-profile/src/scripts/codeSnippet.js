const SNIPPET = `
<span class="tok-com">// the short version</span>
<span class="tok-key">const</span> <span class="tok-fn">developer</span> <span class="tok-key">=</span> <span class="tok-prop">Developer</span><span class="caret"></span> <span class="tok-key">from</span> <span class="tok-str">"uganda"</span><span class="tok-com">;</span>

<span class="tok-key">export const</span> <span class="tok-fn">yakan</span> <span class="tok-key">=</span> {
  <span class="tok-prop">name</span><span class="tok-key">:</span>     <span class="tok-str">"Yakan Frank"</span><span class="tok-com">,</span>
  <span class="tok-prop">role</span><span class="tok-key">:</span>     <span class="tok-str">"Full-Stack Developer"</span><span class="tok-com">,</span>
  <span class="tok-prop">basedIn</span><span class="tok-key">:</span>  <span class="tok-str">"Uganda"</span><span class="tok-com">,</span>
  <span class="tok-prop">school</span><span class="tok-key">:</span>   <span class="tok-str">"BYU"</span><span class="tok-com">,</span>

  <span class="tok-prop">stack</span><span class="tok-key">:</span> [
    <span class="tok-str">"TypeScript"</span>, <span class="tok-str">"Next.js"</span>, <span class="tok-str">"React"</span><span class="tok-com">,</span>
    <span class="tok-str">"Node.js"</span>, <span class="tok-str">"Python"</span>, <span class="tok-str">"C#"</span><span class="tok-com">,</span>
    <span class="tok-str">"Vite"</span>, <span class="tok-str">"SQL"</span>, <span class="tok-str">"Adobe"</span>, <span class="tok-str">"MS Office"</span><span class="tok-com">,</span>
  ],

  <span class="tok-prop">available</span><span class="tok-key">:</span> <span class="tok-num">true</span><span class="tok-com">,</span>
};
`;

export const codeCard = (file = 'yakan.ts') => `
  <div class="code-card w-full rounded-2xl overflow-hidden">
    <div class="flex items-center gap-2 px-4 py-2.5 border-b border-white/15 bg-white/5">
      <span class="code-dot bg-red-400"></span>
      <span class="code-dot bg-amber-400"></span>
      <span class="code-dot bg-emerald-400"></span>
      <span class="ml-2 text-xs font-medium text-white/80">${file}</span>
    </div>
    <pre class="overflow-x-auto px-4 py-3.5"><code>${SNIPPET}</code></pre>
  </div>
`;

export default codeCard;