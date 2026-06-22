// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "lyc8503's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/lyc8503', label: 'GitHub' },
    { link: 'https://blog.lyc8503.net/', label: 'Blog' },
    { link: 'mailto:me@lyc8503.net', label: 'Email Me', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    // 福彩3D API
    {
      id: 'api_monitor',
      name: '福彩3D API',
      method: 'GET',
      target: 'https://api.ilqx.dpdns.org',
      tooltip: '福彩3D数据接口服务',
      statusPageLink: 'https://api.ilqx.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // bd 无需监控，跳过
    // CloudPaste 前端
    {
      id: 'cw_monitor',
      name: 'CloudPaste 内容分享前端',
      method: 'GET',
      target: 'https://cw.ilqx.dpdns.org',
      tooltip: 'CloudPaste 安全文本分享网页',
      statusPageLink: 'https://cw.ilqx.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // 短链服务
    {
      id: 'dl_monitor',
      name: 'Linklet 短链接服务',
      method: 'GET',
      target: 'https://dl.ilqx.dpdns.org',
      tooltip: '短链接生成与跳转系统',
      statusPageLink: 'https://dl.ilqx.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // 个人主页 root(ilqx.dpdns.org)
    {
      id: 'root_monitor',
      name: '个人主页',
      method: 'GET',
      target: 'https://ilqx.dpdns.org',
      tooltip: '个人主站首页',
      statusPageLink: 'https://ilqx.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // 节点管理页
    {
      id: 'jd_monitor',
      name: '节点管理后台',
      method: 'GET',
      target: 'https://jd.ilqx.dpdns.org',
      tooltip: '代理节点管理页面',
      statusPageLink: 'https://jd.ilqx.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // UptimeFlare 监控面板
    {
      id: 'jkweb_monitor',
      name: 'UptimeFlare 监控面板',
      method: 'GET',
      target: 'https://jkweb.ilqx.dpdns.org',
      tooltip: '站点在线状态监控页面',
      statusPageLink: 'https://jkweb.ilqx.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // VIP全网视频解析
    {
      id: 'jx_monitor',
      name: 'VIP视频解析服务',
      method: 'GET',
      target: 'https://jx.ilqx.dpdns.org',
      tooltip: '全网影视VIP免费解析',
      statusPageLink: 'https://jx.ilqx.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
    },
    // MC在线网页端
    {
      id: 'mc_monitor',
      name: 'MC Web 在线我的世界',
      method: 'GET',
      target: 'https://mc.ilqx.dpdns.org',
      tooltip: '网页版Minecraft在线游玩',
      statusPageLink: 'https://mc.ilqx.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // 图床服务
    {
      id: 'tc_monitor',
      name: 'TC 图片存储图床',
      method: 'GET',
      target: 'https://tc.ilqx.dpdns.org',
      tooltip: '图片上传与存储图床',
      statusPageLink: 'https://tc.ilqx.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // 梯子宣传页
    {
      id: 'tz_monitor',
      name: '代理服务宣传页',
      method: 'GET',
      target: 'https://tz.ilqx.dpdns.org',
      tooltip: '机场/代理服务介绍页面',
      statusPageLink: 'https://tz.ilqx.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // xlcx 跳过不监控
    // CloudPaste 后端接口
    {
      id: 'bar_monitor',
      name: 'CloudPaste 后端服务',
      method: 'GET',
      target: 'https://bar.ilqx.dpdns.org',
      tooltip: 'CloudPaste 文本分享后端API',
      statusPageLink: 'https://bar.ilqx.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // dzmm
    {
      id: 'dzmm_monitor',
      name: 'dzmm 站点',
      method: 'GET',
      target: 'https://dzmm.ilqx.dpdns.org',
      tooltip: 'dzmm独立服务页面',
      statusPageLink: 'https://dzmm.ilqx.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // Cloudflare在线反代
    {
      id: 'fd_monitor',
      name: 'CF 在线反代工具',
      method: 'GET',
      target: 'https://fd.ilqx.dpdns.org',
      tooltip: 'Cloudflare在线反向代理生成工具',
      statusPageLink: 'https://fd.ilqx.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // IP查询接口
    {
      id: 'ip_monitor',
      name: 'IP地址查询API',
      method: 'GET',
      target: 'https://ip.ilqx.dpdns.org',
      tooltip: '获取访问者IP及归属信息',
      statusPageLink: 'https://ip.ilqx.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // jscx 跳过不监控
    // 邮箱页面 mail.ilqx.dpdns.org
    {
      id: 'mail_monitor',
      name: '邮箱管理页面',
      method: 'GET',
      target: 'https://mail.ilqx.dpdns.org',
      tooltip: '邮件收发管理网页',
      statusPageLink: 'https://mail.ilqx.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
  ],
  // [Optional] Notification settings
  notification: {
    // [Optional] Notification webhook settings, if not specified, no notification will be sent
    // More info at Wiki: https://github.com/lyc8503/UptimeFlare/wiki/Setup-notification
    webhook: {
      // [Required] webhook URL (example: Telegram Bot API)
      url: 'https://api.telegram.org/bot123456:ABCDEF/sendMessage',
      // [Optional] HTTP method, default to 'GET' for payloadType=param, 'POST' otherwise
      // method: 'POST',
      // [Optional] headers to be sent
      // headers: {
      //   foo: 'bar',
      // },
      // [Required] Specify how to encode the payload
      // Should be one of 'param', 'json' or 'x-www-form-urlencoded'
      // 'param': append url-encoded payload to URL search parameters
      // 'json': POST json payload as body, set content-type header to 'application/json'
      // 'x-www-form-urlencoded': POST url-encoded payload as body, set content-type header to 'x-www-form-urlencoded'
      payloadType: 'x-www-form-urlencoded',
      // [Required] payload to be sent
      // $MSG will be replaced with the human-readable notification message
      payload: {
        chat_id: 12345678,
        text: '$MSG',
      },
      // [Optional] timeout calling this webhook, in millisecond, default to 5000
      timeout: 10000,
    },
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: 'Asia/Shanghai',
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
}

// 维护时段：2026-06-22 12:00 至 2050-06-22 12:00
const maintenances: MaintenanceConfig[] = [
  {
    monitors: [
      'api_monitor',
      'cw_monitor',
      'dl_monitor',
      'root_monitor',
      'jd_monitor',
      'jkweb_monitor',
      'jx_monitor',
      'mc_monitor',
      'tc_monitor',
      'tz_monitor',
      'bar_monitor',
      'dzmm_monitor',
      'fd_monitor',
      'ip_monitor',
      'mail_monitor'
    ],
    title: '长期站点维护窗口期',
    body: '全站点预留长期维护时段，期间故障告警暂停推送，状态页面展示维护提示',
    start: '2026-06-22T12:00:00+08:00',
    end: '2050-06-22T12:00:00+08:00',
    color: 'blue',
  },
]

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
