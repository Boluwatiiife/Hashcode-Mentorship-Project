export interface GitHubGetUsersResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubUser[];
}

export interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: Type;
  site_admin: boolean;
  //score: number;
}

enum Type {
  User = "User",
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export interface GitHubGetUserProfileResponse{
 // items: GitUserProfile[];
 
 login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: Type;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location:string;
  email: string;
  hireable:boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: Number;
  followers: Number;
  following: Number;
  created_at: string;
  updated_at: String;
}
/*
export interface GitUserProfile {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: Type;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location:string;
  email: string;
  hireable:boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: Number;
  followers: Number;
  following: Number;
  created_at: string;
  updated_at: String;
}
*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export interface GitHubUserRepoLang{
  languages:{}
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export interface userProfile{
  profile: saidProfile[]
}
export interface saidProfile{
  /*login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: Type;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location:string;
  email: string;
  hireable:boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: Number;
  followers: Number;
  following: Number;
  created_at: string;
  updated_at: String; */
}


