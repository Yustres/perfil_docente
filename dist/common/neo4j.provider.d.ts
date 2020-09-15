export declare const Neo4jProvider: {
    provide: string;
    useFactory: () => import("neo4j-driver/types/driver").Driver;
};
