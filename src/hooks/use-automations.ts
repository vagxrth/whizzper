import { createAutomations } from "@/actions/automation"
import { useMutationData } from "./use-mutation"

export const useCreateAutomation = (id?: string) => {
    const { isPending, mutate: originalMutate } = useMutationData(
        ['create-automation'],
        createAutomations,
        'user-automations'
    )

    const mutate = (variables: any) => {
        return originalMutate(variables.id)
    }

    return { isPending, mutate }
}