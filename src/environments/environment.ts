// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  default_home_menu_bienvenue : 'Rendez-vous dans la rubrique "Mes questionnaires" pour faire vos questionnaires d\'intégration',
  default_home_label : 'Home',
  default_home_menu_result : 'Resultats',
  default_home_menu_candidats : 'Candidats',
  default_home_menu_tests : 'Questionnaires',
  default_home_menu_deco : 'Déconnection',
  default_home_footer : 'Suivez-nous !',
  welcome_user_afteLoginSucces: 'Bienvenue ',
  apiUrl: 'api',//<-- 'API/' prefix needed for proxy configuration
};
