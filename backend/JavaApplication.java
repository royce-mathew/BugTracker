import py4j.GatewayServer;

public class JavaApplication {
    private static GatewayServer gatewayServer;

    public int addition(int first, int second) {
        return first + second;
    }

    public static void main(String[] args) {
        // App is now the gateway.entry_point
        gatewayServer = new GatewayServer(new JavaApplication());
        gatewayServer.start();
        System.out.println("Gateway Server Started");
    }


    public static void stop() {
        if (gatewayServer != null) {
            gatewayServer.shutdown();
            System.out.println("Gateway Server Stopped");
        }
    }
}