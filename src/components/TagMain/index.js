import { ScContainerCenter } from "@/styles/styledComponents/components/ContainerCenter";

export function TagMain({ children }) {

  return (
    <main>
      <ScContainerCenter className="d-flex flex-column mt-4">
        {children}
      </ScContainerCenter>
    </main>
  )
}