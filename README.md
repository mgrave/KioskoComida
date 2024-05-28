export default function CategoryIcon(){
    return(
        <div>CategoryIcon</div>
    )
}
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