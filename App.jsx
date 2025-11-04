import { MainProvider } from "./src/context/MainContext";
import AppContent from "./src/screens/AppContent";

export default function App() {
  return (
    <MainProvider>
      <AppContent />
    </MainProvider>
  );
}
