// 電気代・ガス代サイトのツール一覧と共通の値（このサイト専用。ほかのサイトとは別管理）
const TOOLS = [
  { path: "/denki/", name: "家電の電気代 計算", desc: "消費電力と使う時間から、家電ごとの1日・1か月・1年の電気代を計算" },
  { path: "/denki/danbou/", name: "暖房器具の電気代・ガス代・灯油代 比較", desc: "エアコン・こたつ・ストーブなど、どの暖房がいちばん安いか" },
  { path: "/denki/shindan/", name: "電気代・ガス代 診断", desc: "世帯人数・季節ごとの平均と比べて、あなたの光熱費は高い？" },
  { path: "/denki/plan/", name: "電気料金プラン 比較", desc: "今のプランと別のプランで、毎月の電気代がいくら変わるか" },
  { path: "/denki/gas/", name: "ガス代 計算（お風呂1回のガス代も）", desc: "使用量からガス代、お湯をわかす量からお風呂のガス代を計算" },
  { path: "/denki/kaikae/", name: "家電の買い替え 電気代比較", desc: "冷蔵庫・エアコンを省エネ機種にすると、何年で元が取れるか" },
  { path: "/denki/taiyoukou/", name: "太陽光発電 元が取れるか計算", desc: "設置費用・発電量・売電価格（2026年度）から回収年数を計算" },
];

const DEFAULT_RATE = 31; // 円/kWh（全国家庭電気製品公正取引協議会の目安単価）
const yen = n => Math.round(n).toLocaleString("ja-JP") + "円";
const num = id => Math.max(0, Number(document.getElementById(id).value) || 0);
const n1 = v => (Math.round(v * 10) / 10).toLocaleString("ja-JP");

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("related");
  if (!el) return;
  const here = location.pathname.replace(/index\.html$/, "");
  el.innerHTML = `<h2>ほかのツール</h2><ul class="tools">${TOOLS.filter(t => t.path !== here)
    .map(t => `<li><a href="${t.path}"><b>${t.name}</b><span>${t.desc}</span></a></li>`).join("")}</ul>`;
});
