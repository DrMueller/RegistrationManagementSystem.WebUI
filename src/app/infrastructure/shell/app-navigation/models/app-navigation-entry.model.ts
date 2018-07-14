export class AppNavigationEntry {
  constructor(
    public readonly displayText: string,
    public readonly baseUrl: string | null,
    public readonly isNavigatable: boolean) {
  }

  public static createNotNavigable(displayText: string): AppNavigationEntry {
    return new AppNavigationEntry(displayText, null, false);
  }
}
