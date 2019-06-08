This project consists of two projects: GitHubRepositorySearchProject (Angular 6, client side) and RepositoriesStore.API(ASP.NET core, Web API).

To run this project you need to follow below steps:
1) On repository page click "Clone or download" button and download a ZIP file.
2) Open the main project folder with two projects in VS Code.
3) Open terminal and move to GitHubRepositorySearchProject directory (command: "cd GitHubRepositorySearchProject").
4) Run the Angular project with command ng serve. If you are getting error with message "You seem to not be depending on "@angular/core" and/or "rxjs". This is an error.",
 then put command "nmp link" and run "ng serve" again.
5) Run the ASP.NET project. Move to RepositoriesStore.API directory.
6) Run command "dotnet run".
7) Open your browser and write url: "http://localhost:4200".

