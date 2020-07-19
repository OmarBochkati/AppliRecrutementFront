export enum RoleName {
    ROLE_CORRECTEUR,
    ROLE_ADMIN,
    ROLE_CANDIDAT
}

export class Role{
    id: number;
    name: RoleName;
}