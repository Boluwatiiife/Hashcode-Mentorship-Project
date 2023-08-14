// Lazy Loading
import * as dotenv from 'dotenv';
import fetch from 'node-fetch';
import { GitHubGetUsersResponse } from '../interfaces/github.response';
//import { GitHubGetUserProfileResponse } from '../interfaces/github.response';
import { GitHubUserRepoLang } from '../interfaces/github.response';
import { userProfile } from '../interfaces/github.response';
import { response } from 'express';

dotenv.config();

export type SearchGitHubUsersRequest = {
  searchTerm: string;
  sort?: string;
  order?: 'asc' | 'desc';
  perPage?: number;
  page?: number;
}

export const searchGitHubUsers = async (request: SearchGitHubUsersRequest): Promise<GitHubGetUsersResponse> => {
  const { searchTerm, sort, order, perPage, page } = request;
  // const url = `https://api.github.com/search/users?q=${searchTerm}&sort=${sort}&order=${order}&per_page=${perPage}&page=${page}`;
  let url = `https://api.github.com/search/users?q=${searchTerm}`;
  if (sort) {
    url += `&sort=${sort}`;
  }
  if (order) {
    url += `&order=${order}`;
  }
  if (perPage) {
    url += `&per_page=${perPage}`;
  }
  if (page) {
    url += `&page=${page}`;
  }
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
    },
  });
  // console.log(data);
  return await response.json();
}
//console.log(response);

// searchGitHubUsers({
//   searchTerm: 'bolu',
// }).then();

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Question 3.
export type GitHubUserRepoLanguageRequest = {
  owner : string;
  repo : string;
}

export const GetGithubUserRepoLangs = async (request:GitHubUserRepoLanguageRequest):Promise<GitHubUserRepoLang> =>{
  const {owner,repo}=request;
  let url = `https://api.github.com/repos/${owner}/${repo}/languages`;

  const response = await fetch(url, {
      headers:{
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
      },
  });
  return await response.json();
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Question 2 trial
export type GetUserProfileRequest={
  username:string;
}

export const GetUserProfile=async(request: GetUserProfileRequest):Promise<userProfile>=>{
  const {username} = request;
  let url = `https://api.github.com/users/${username}`;
  //let url = `https://api.github.com/search/users?q=${theeUser}`;
  const response = await fetch(url,{
      headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
      },
  });
  return await response.json();
};




