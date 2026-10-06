/* 
PRODUCTO
--------
name
desc
created_at
created_by
stock
sku

CATEGORIA
--------
name
desc
created_at
created_by
*/

abstract class DatosBasicos {
  constructor(
    public name: string,
    public desc: string,
    protected created_at: Date, // Puede modificar o acceder la misma clase y clases que extienden de la clase padre
    private created_by: number // Solo puede modificar o acceder la misma clase
  ) {}

  get fullYear() {
    return this.created_at.getFullYear();
  }

  get fullDesc() {
    return this.name + " - " + this.desc;
  }

  abstract guardar(): number;
}

class Producto extends DatosBasicos {
  constructor(
    public stock: number,
    public sku: number,
    name: string,
    desc: string,
    created_at: Date,
    created_by: number
  ) {
    super(name, desc, created_at, created_by);
  }

  override get fullDesc() {
    super.created_at;
    return "Producto: " + super.fullDesc;
  }

  override guardar(): number {
    return 9 + 1;
  }
}

class Categoria extends DatosBasicos {
  public productos: Producto[] = [];
  constructor(
    name: string,
    desc: string,
    created_at: Date,
    created_by: number
  ) {
    super(name, desc, created_at, created_by);
  }

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }

  override get fullDesc() {
    return "Categoria: : " + super.fullDesc;
  }

  guardar(): number {
    return 9 + 1;
  }
}

/* class Producto extends DatosBasicos {
  constructor(
    public stock: number,
    public sku: number,
    ...args: ConstructorParameters<typeof DatosBasicos> // Reutiliza el constructor de la clase base
  ) {
    super(...args); // Pasa los argumentos directamente a la clase base
  }
} */

const producto1 = new Producto(
  100,
  1,
  "iphone",
  "this is a smartphone",
  new Date(),
  1
);

let categoria = new Categoria(
  "Celulares",
  "This a Phones Category",
  new Date(),
  2
);

const productoDate = producto1.fullYear;
categoria.agregarProducto(producto1);

console.log(producto1.fullDesc, ",", categoria.fullDesc);

/* 
CLASES Y METODOS ABSTRACTOS
---------------------------
En TypeScript, las clases abstractas y métodos abstractos son conceptos de programación orientada a objetos que te permiten definir estructuras base que otras clases deben implementar.

Clase Abstracta
---------------
Una clase abstracta es una clase que no puede ser instanciada directamente. Solo puede ser usada como clase base para otras clases. Se define usando la palabra clave 'abstract'.

abstract class Animal {
    nombre: string;
    
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    
    // Método concreto (implementado)
    moverse(): void {
        console.log(`${this.nombre} se está moviendo`);
    }
    
    // Método abstracto (sin implementación)
    abstract hacerSonido(): void;
}

// ❌ Esto daría error - no puedes instanciar una clase abstracta
// const animal = new Animal("Genérico");

Método Abstracto
----------------
Un método abstracto es un método declarado pero no implementado en la clase abstracta. Las clases hijas deben proporcionar su propia implementación:

abstract class Figura {
    abstract calcularArea(): number;
    abstract calcularPerimetro(): number;
    
    // Método concreto que puede usar los métodos abstractos
    mostrarInfo(): void {
        console.log(`Área: ${this.calcularArea()}`);
        console.log(`Perímetro: ${this.calcularPerimetro()}`);
    }
}

class Rectangulo extends Figura {
    constructor(private ancho: number, private alto: number) {
        super();
    }
    
    // Implementación obligatoria del método abstracto
    calcularArea(): number {
        return this.ancho * this.alto;
    }
    
    calcularPerimetro(): number {
        return 2 * (this.ancho + this.alto);
    }
}

class Circulo extends Figura {
    constructor(private radio: number) {
        super();
    }
    
    calcularArea(): number {
        return Math.PI * this.radio ** 2;
    }
    
    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}

// Uso
const rectangulo = new Rectangulo(5, 3);
rectangulo.mostrarInfo(); // Área: 15, Perímetro: 16

const circulo = new Circulo(4);
circulo.mostrarInfo(); // Área: 50.26..., Perímetro: 25.13...

¿Cuándo usar clases abstractas?
Las clases abstractas son útiles cuando:

Quieres compartir código entre varias clases relacionadas
Necesitas forzar ciertas clases a implementar métodos específicos
Quieres definir un "contrato" parcial (algunos métodos implementados, otros no)
Tienes una jerarquía de clases con comportamiento común

La diferencia principal con las interfaces es que las clases abstractas pueden contener implementaciones de métodos y mantener estado (propiedades con valores), mientras que las interfaces solo definen la estructura sin implementación.
*/

// let datos = new DatosBasicos("Ismael", "klsdjlksdsdlks", new Date(), 2); // No se puede crear instancias de clases abstractas.
