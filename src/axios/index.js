/**
 * Created by Taryn on 2019/7/30.
 */
import axios from 'axios';
import { get, post, Delete, put } from './tools';
import * as config from './config';

export const getBbcNews = () => get({ url: config.NEWS_BBC });

export const npmDependencies = () => axios.get('./npm.json').then(res => res.data).catch(err => console.log(err));

export const weibo = () => axios.get('./weibo.json').then(res => res.data).catch(err => console.log(err));

export const gitOauthLogin = () => get({ url: `${config.GIT_OAUTH}/authorize?client_id=792cdcd244e98dcd2dee&redirect_uri=http://localhost:3006/&scope=user&state=reactAdmin` });
export const gitOauthToken = code => post({
    url: `https://cors-anywhere.herokuapp.com/${config.GIT_OAUTH}/access_token`,
    data: {
        client_id: '792cdcd244e98dcd2dee',
        client_secret: '81c4ff9df390d482b7c8b214a55cf24bf1f53059',
        redirect_uri: 'http://localhost:3006/',
        state: 'reactAdmin',
        code,
    }
});
// {headers: {Accept: 'application/json'}}
export const gitOauthInfo = access_token => get({ url: `${config.GIT_USER}access_token=${access_token}` });

// easy-mock数据交互
// 管理员权限获取
export const admin = (data) => post({
    url: config.USER_LOGIN,
    data,
    headers: {
        'Content-Type': 'application/json',
    }
});
// 访问权限获取
export const guest = () => get({ url: config.MOCK_AUTH_VISITOR });

export const getAllUsers = () => get({
    url: config.ALL_USERS + '?current=1&size=500',
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const getUserProfile = () => get({
    url: config.USER_PROFILE,
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const uploadFiles = (file) => post ({
    url: config.UPLOAD,
    data: file,
    headers: {
        // 'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const getCpMatching = () => get({
    url: config.CP_TEAM + '?current=1&size=500',
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const getCpTeamMate = (id) => get({
    url: config.CP_ADMIN + '/' + id,
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const getAllProjects = () => get({
    url: config.PROJECTS + '?current=1&size=20',
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const createProjects = (data) => post({
    url: config.PROJECTS,
    data,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const deleteProjects = (id) => Delete ({
    url: config.PROJECTS + '/' + id,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const editProjects = (data) => put({
    url: config.PROJECTS,
    data,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const getAllProjectTasks = (id) => get({
    url: config.PROJECT_TASK + '/' + id,
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const deleteProjectTask = (id) => Delete ({
    url: config.PROJECT_TASK + '/' + id,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const createProjectTask = (data) => post({
    url: config.PROJECT_TASK,
    data,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const getTeamMatching = () => get({
    url: config.PROJECT_TEAM + '?current=1&size=200',
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const getStudyPath = () => get({
    url: config.STUDY_PATH,
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const deleteStudyPath = (id) => Delete ({
    url: config.STUDY_PATH + '/' + id,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const createStudyPath = (data) => post({
    url: config.STUDY_PATH,
    data,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const getStudyPathTasks = (id) => get({
    url: config.STUDY_PATH_DETAILS + '/' + id,
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const deleteStudyPathTask = (id) => Delete ({
    url: config.STUDY_PATH_DETAILS + '/' + id,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const createStudyPathTask = (data) => post({
    url: config.STUDY_PATH_DETAILS,
    data,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const getAllSchedule = () => get({
    url: config.SCHEDULE + '/',
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const deleteSchedule = (id) => Delete ({
    url: config.SCHEDULE + '/' + id,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const createSchedule = (data) => post({
    url: config.SCHEDULE,
    data,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const getShopItems = () => get({
    url: config.COMMODITY,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const deleteShopItem = (id) => Delete ({
    url: config.COMMODITY + '/' + id,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const createShopItem = (data) => post({
    url: config.COMMODITY,
    data,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const getOrders = () => get({
    url: config.ORDERS + "/0",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const deleteOrder = (id) => Delete ({
    url: config.ORDERS + '/' + id,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const getMissionHomeworks = () => get({
    url: config.PROJECTWORK,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const getArticles = () => get({
    url: config.ARTICLES + '?current=1&size=100',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const deleteArticles = (id) => Delete ({
    url: config.ARTICLES + '/' + id,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const getBanners = () => get({
    url: config.BANNER + '?current=1&size=10',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const deleteBanner = (id) => Delete ({
    url: config.BANNER + '/' + id,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const editBannerRoute = (data) => put({
    url: config.BANNER,
    data,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const createBanner = (data) => post({
    url: config.BANNER,
    data,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const getGroups = () => get({
    url: config.GROUP + '?current=1&size=20',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const createGroup = (data) => post({
    url: config.GROUP,
    data,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const deleteGroup = (id) => Delete ({
    url: config.GROUP + '/' + id,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const getClocks = () => get({
    url: config.CLOCK + '?current=1&size=500',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const deleteClock = (id) => Delete ({
    url: config.CLOCK + '/' + id,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const getTags = () => get({
    url: config.TAG,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const deleteTag = (id) => Delete ({
    url: config.TAG + '/' + id,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export const addTag = (data) => post({
    url: config.TAG,
    data,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});
