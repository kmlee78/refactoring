public static void main(String[] args) {
    try {
        if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
        String filename = args[args.length - 1];
        File input = Paths.get(filename).toFile();
        ObjectMapper mapper = new ObjectMapper();
        Order[] orders = mapper.readValue(input, Order[].class);
        if (Stream.of(args).anyMatch(arg -> "-r".equals(arg)))
            System.out.println(Stream.of(orders)
                                    .filter(o -> "ready".equals(o.status))
                                    .count());
        else
            System.out,println(orders.length);
    } catch (Exception e) {
        System.err.println(e);
        System.exit(1);
    }
}


/*------------------------refactoring method1-------------------------*/


public static void main(String[] args) {
    try {
        run(args);
    } catch (Exception e) {
        System.err.println(e);
        System.exit(1);
    }
}

static long run(String[] args) throws IOException {
    return countOrders(parseCommandLine(args));
}

private static CommandLine parseCommandLine(String[] args) {
    if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
    CommandLine result = new CommandLine();
    result.filename = args[args.length - 1];
    result.onlyCountReady = Stream.of(args).anyMatch(arg -> "-r".equals(arg));
    return result;
}

private static long countOrders(CommandLine commandLine) throws IOException {
    File input = Paths.get(commandLine.filename).toFile();
    ObjectMapper mapper = new ObjectMapper();
    Order[] orders = mapper.readValue(input, Order[].class);
    if (commandLine.onlyCountReady)
        return Stream.of(orders)
                     .filter(o -> "ready".equals(o.status))
                     .count();
    else
        return orders.length;
}

private static class CommandLine {
    boolean onlyCountReady;
    String filename;
}


/*------------------------refactoring method2-------------------------*/


static long run(String[] args) throws IOException {
    CommandLine commandLine = new CommandLine(args);
    return countOrders(commandLine);
}

private static long countOrders(CommandLine commandLine) throws IOException {
    File input = Paths.get(commandLine.filename).toFile();
    ObjectMapper mapper = new ObjectMapper();
    Order[] orders = mapper.readValue(input, Order[].class);
    if (commandLine.onlyCountReady)
        return Stream.of(orders)
                     .filter(o -> "ready".equals(o.status))
                     .count();
    else
        return orders.length;
}

public class CommandLine {
    String[] args;

    public CommandLine(String[] args) {
        this.args = args;
        if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
    }
    String filename() {
        return args[args.length - 1];
    }
    boolean onlyCountReady() {
        return Stream.of(args).anyMatch(arg -> "-r".equals(arg));
    }
}