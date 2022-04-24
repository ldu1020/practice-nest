
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateComponentInput {
    id: string;
    name: string;
    github?: Nullable<string>;
    figma?: Nullable<string>;
}

export interface UpdateComponentInput {
    id: string;
    name?: Nullable<string>;
    github?: Nullable<string>;
    figma?: Nullable<string>;
}

export interface CreateUserInput {
    exampleField?: Nullable<number>;
}

export interface UpdateUserInput {
    id: number;
}

export interface Source {
    github?: Nullable<string>;
    figma?: Nullable<string>;
}

export interface Component {
    id: string;
    name: string;
    source?: Nullable<Source>;
}

export interface IQuery {
    components(): Component[] | Promise<Component[]>;
    component(id: number): Nullable<Component> | Promise<Nullable<Component>>;
    users(): Nullable<User>[] | Promise<Nullable<User>[]>;
    user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createComponent(createComponentInput: CreateComponentInput): Component | Promise<Component>;
    updateComponent(updateComponentInput: UpdateComponentInput): Component | Promise<Component>;
    removeComponent(id: number): Nullable<Component> | Promise<Nullable<Component>>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export interface User {
    id: string;
    name: string;
    role: string;
    components: Component[];
}

type Nullable<T> = T | null;
