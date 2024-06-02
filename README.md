export default function CategoryIcon(){
    return(
        <div>CategoryIcon</div>
    )
}

PROUESTA: que el cliente pueda agregar comentarios a su orden.
# Historial de Cambios

## [v1.0.0] - 2024-05-27

### Añadido

    -Se empezó el proyecto del Kiosko
    -Se realizó la distribución de los 3 contenedores que tendrá nuestra OrderPage

## [v1.1.0] - 2024-05-27

### Añadido

    -se agregó prisma al proyecto para poder emplear una base de datos.
    -usamos render para hostear una base de datos de postgres.
    -cargamos la base de datos con el script seed de prisma.

## [v1.2.0] - 2024-05-28

### Añadido

    -empezamos a implementar data fetching en el proyecto.
    -se muestran las categorias de los productos en el sidebar.
    -cada categoría ya aparece con su nombre de categoría y su respectiva imagen.
    
## [v1.3.0] - 2024-05-28

### Añadido

    -implementamos routin dinámico para cada categoría, cada que se presiona sobre una categoría va a su dirección, con esto podemos hace una consulta a la base de datos y traer los productos de la categoría.

## [v1.4.0] - 2024-05-28

### Añadido

    -Ahora cada que se elige una categoría se detecta y obtiene los productos de esa categoría.
    -Se muestran los nombres de los productos y el precio en USD de cada producto según la categoría que se eligió.
    -Además de que cada producto tenga su nombre y precio tiene la foto del producto, además d eun botón debajo para agregar a carrito (aún no funciona, sólo se diseñó el botón).
    -Por último se resalta con un color ambar la categoría en la que se está.

## [v1.5.0] - 2024-05-29

### Añadido

    -Se implementa Zustand para empezar a crear el carrito.
    -Ahora el botón de agregar ya hace su función de agregar el producto al carrito
    -Se muestran los artículos en el carrito.
    -no se duplican los productos, si no que se muestra la cantidad de cada producto que se pide.
    -en el carrito ya tiene íconos de + y - para agregar o decrementar cantidad de productos desde el carrito, además de ser funcionales.
    -ya se pueden eliminar items del carrito.
    -Se muestra el total a pagar de toda la order.

## [v1.6.0] - 2024-05-29

### Añadido

    -se creó en la base de datos el modelo de ordenes 
    -se le pide al usuario proporcionar su nombre
    -hay una notificación si no se ingresa el nombre
    -hay una notificación si hay algún error en la orden
    -se guardan las ordenes en la base de datos.
    -se evitan las ordenes duplicadas borrando los productos del carrito al confimar producto.
    
## [v1.7.0] - 2024-05-30

### Añadido

    -se crean funciones de admin
    -ya está la página principal del admin
    -ya se muestran ordenes pendientes y se pueden marcar como completadas también

## [v1.8.0] - 2024-05-30

### Añadido

    -se agregó un buscador.
    -ya se muestran los resultados del buscador.
    -paginador implementado.

## [v1.9.0] - 2024-05-30

### Añadido

    -se agregó un buscador.
    -ya se muestran los resultados del buscador.
    -paginador implementado.

## [v2.0.0] - 2024-05-30

### Añadido

   -Ahora se pueden crear nuevos artículos para insertarlos en la página automáticamente.
   -los productos nuevos también se agregan en la base de datos.

## [v2.1.0] - 2024-05-30

### Añadido
   -ahora se pueden editar productos ya creados.
   -se guardan los cambios en la base de datos y en la página web se muestran

## [v2.2.0] - 2024-05-30

### Añadido
   -se ha creado un endpoint para api
   -config de swr

## [v2.3.0] - 2024-05-30

### Añadido
   -ya se muestran las ordenes listas.

## [v2.3.1] - 2024-05-30

### Añadido
   -bugs arreglados donde no se mostraban las ordenes por hacer.



