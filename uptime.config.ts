// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "Sak's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/cnzz666', label: 'GitHub' },
    { link: 'https://ilqx.dpdns.org', label: 'Blog' },
    { link: 'mailto:cnzz666@163.com', label: 'Email Me', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    // IPv6 Google 连通性检测（置顶第一项）
    {
      id: 'ipv6_google_monitor',
      name: 'IPv6 Google 连通检测',
      method: 'GET',
      target: 'https://ipv6.google.com',
      tooltip: 'IPv6网络连通性基准检测',
      statusPageLink: 'https://ipv6.google.com',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // 个人主页（日常主站）
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
    // CloudPaste 前端分享页
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
    // CloudPaste 后端接口
    {
      id: 'bar_monitor',
      name: 'CloudPaste 后端服务',
      method: 'GET',
      target: 'https://bar.ilqx.dpdns.org/api/paste/84nvyY',
      tooltip: 'CloudPaste 文本分享后端API',
      statusPageLink: 'https://bar.ilqx.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // 短链接服务
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
    // 邮箱管理页面
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
    // 监控面板
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
    // 节点管理后台
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
    // CF在线反代工具
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
    // dzmm站点
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
    // VIP视频解析
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
    },
    // MC网页端
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
    // 代理宣传页
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
    // 福彩3D API（放到最后）
    {
      id: 'api_monitor',
      name: '福彩3D API',
      method: 'GET',
      target: 'https://api.ilqx.dpdns.org/cp/cp1.0.3',
      tooltip: '福彩3D数据接口服务',
      statusPageLink: 'https://api.ilqx.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
  ],
  notification: {
    webhook: {
      url: 'https://api.telegram.org/bot123456:ABCDEF/sendMessage',
      payloadType: 'x-www-form-urlencoded',
      payload: {
        chat_id: 12345678,
        text: '$MSG',
      },
      timeout: 10000,
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 5,
  },
}

// 当前无任何维护计划
const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
