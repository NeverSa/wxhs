import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const totalUser = r => require.ensure([], () => r(require('@/page/totalUser')), 'totalUser');
const addGoods = r => require.ensure([], () => r(require('@/page/addGoods')), 'addGoods');
const gameIndustry = r => require.ensure([], () => r(require('@/page/gameIndustry')), 'gameIndustry');
const relaxGame = r => require.ensure([], () => r(require('@/page/relaxGame')), 'relaxGame');
const catchFish = r => require.ensure([], () => r(require('@/page/catchFish')), 'catchFish');
const activeUser = r => require.ensure([], () => r(require('@/page/activeUser')), 'activeUser');
const newAddUser = r => require.ensure([], () => r(require('@/page/newAddUser')), 'newAddUser');
const activeScoar = r => require.ensure([], () => r(require('@/page/activeScoar')), 'activeScoar');
const Retention = r => require.ensure([], () => r(require('@/page/Retention')), 'Retention');
const marketShare = r => require.ensure([], () => r(require('@/page/marketShare')), 'marketShare');
const activePermeability = r => require.ensure([], () => r(require('@/page/activePermeability')), 'activePermeability');
const lossRate = r => require.ensure([], () => r(require('@/page/lossRate')), 'lossRate');
const gameLine = r => require.ensure([], () => r(require('@/page/gameLine')), 'gameLine');
const sendMessage = r => require.ensure([], () => r(require('@/page/sendMessage')), 'sendMessage');
const explain = r => require.ensure([], () => r(require('@/page/explain')), 'explain');

const routes = [
	{
		path: '/',
		component: manage
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		},{
			path: '/totalUser',
			component: totalUser,
			meta: ['运营监控', '总用户量'],
		},{
			path: '/addGoods',
			component: addGoods,
			meta: ['添加数据', '添加商品'],
		},{
			path: '/gameIndustry',
			component: gameIndustry,
			meta: ['行业纵览', '游戏行业'],
		},{
			path: '/relaxGame',
			component: relaxGame,
			meta: ['行业纵览', '休闲游戏'],
		},{
			path: '/catchFish',
			component: catchFish,
			meta: ['行业纵览', '捕鱼游戏'],
		},{
			path: '/activeUser',
			component: activeUser,
			meta: ['运营监控', '活跃用户'],
		},{
			path: '/newAddUser',
			component: newAddUser,
			meta: ['运营监控', '新增用户'],
		},{
			path: '/activeScoar',
			component: activeScoar,
			meta: ['运营监控', '活跃飙升度'],
		},{
			path: '/marketShare',
			component: marketShare,
			meta: ['运营监控', '市场占有率'],
		},{
			path: '/activePermeability',
			component: activePermeability,
			meta: ['运营监控', '活跃渗透率'],
		},{
			path: '/Retention',
			component: Retention,
			meta: ['运营监控', '留存率'],
		},{
			path: '/lossRate',
			component: lossRate,
			meta: ['运营监控', '流失率'],
		},{
			path: '/gameLine',
			component: gameLine,
			meta: ['运营监控', '游戏行业'],
		}]
	}
];


export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
