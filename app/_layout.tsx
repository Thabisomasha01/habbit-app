import { Stack, useRouter, useRootNavigationState } from "expo-router";
import { useEffect } from "react";

function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const navigationState = useRootNavigationState();
  const isAuth = false;

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!navigationState?.key) return;
      if (!isAuth) {
        router.replace("/auth");
      }
    }, 0); 
    return () => clearTimeout(timeout);
  }, [navigationState, isAuth]);

  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <RouteGuard>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="auth" options={{ headerShown: false }} />
      </Stack>
    </RouteGuard>
  );
}
