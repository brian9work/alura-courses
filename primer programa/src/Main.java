public class Main {
    public static void main(String[] args) {
        System.out.println("Bienvenido a Screen Match");
        System.out.println("Pelicula: Matriz");

        int fechaDeLanzamiento = 1999;
        boolean incluidoEnElPlan = true;
        double notaDeLaPelicula = 8.2;

        double media = (8.2 + 6.0 + 9.0) / 3;
        System.out.println("El media es: " + media);

        String sinopstis = """
                    MAtrix es una pelicula
                    lanzada en el año:
                """ + fechaDeLanzamiento;
        System.out.println(sinopstis);
    }
}