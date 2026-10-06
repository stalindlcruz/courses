/* Los export default pueden exportar funciones, variables, etc quue no sean exportables pero que esten dentro de ellas. */
export default class Group {
  constructor(public readonly id: number, public name: string) {}
}

export const defaultGroups = {
  users: "users",
  admin: "admin",
};

const manejaUsuarios = () => {};
