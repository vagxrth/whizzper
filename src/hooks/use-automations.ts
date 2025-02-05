import { createAutomations } from "@/actions/automation"
import { useMutationData } from "./use-mutation"

export const useCreateAutomation = (id?: string) => {
    const { isPending, mutate } = useMutationData(
        ['create-automation'],
        () => createAutomations(id),
        'user-automations'
    )

    return { isPending, mutate }
}