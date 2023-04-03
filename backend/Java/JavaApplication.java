package Java;
import py4j.GatewayServer;
import java.util.UUID;

public class JavaApplication {
    private static GatewayServer gatewayServer;

    public String generateUUID() {
        return UUID.randomUUID().toString();
    }

    public static void main(String[] args) {
        // App is now the gateway.entry_point
        gatewayServer = new GatewayServer(new JavaApplication());
        gatewayServer.start();
        System.out.println("Gateway Server Started");
    }

    // public static void stop() {
    //     if (gatewayServer != null) {
    //         gatewayServer.shutdown();
    //         System.out.println("Gateway Server Stopped");
    //     }
    // }
}