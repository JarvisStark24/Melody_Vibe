declare module "use-sound" {
  const useSound: (url: string | string[], options?: any) => [() => void, any];
  export default useSound;
}
