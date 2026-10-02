/* Interfaces para las clases y type para todo lo demás */

/* type Animal = {
  name: string;
  caminar(): void;
  onomatopeya(): string;
} */

interface Animal {
  name: string;
  caminar(): void;
  onomatopeya(): string;
}

class Caballo implements Animal {
  name: string = "Roci";

  caminar(): void {
    console.log("Caminando");
  }

  onomatopeya(): string {
    return "hin";
  }
}

class Cerdo implements Animal {
  name: string = "Chanchito";

  caminar(): void {
    console.log("Caminando");
  }

  onomatopeya(): string {
    return "oinc";
  }
}

class Perro implements Animal {
  name: string = "Fido";
  caminar(): void {
    console.log("perro caminando");
  }
  onomatopeya(): string {
    return "gua";
  }
}

class DiccionarioUsuarios {
  [id: string]: string;
}

let diccionarioUsuarios = new DiccionarioUsuarios();
diccionarioUsuarios["1a"] = "usuario 1";
diccionarioUsuarios["a1"] = "usuario 2";

console.log(diccionarioUsuarios);
