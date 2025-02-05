import { MutationFunction, MutationKey, useMutation, useMutationState, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

interface AutomationType {
  id: string;
  name: string;
  createdAt: Date;
  keywords: any[];
  listener?: {
    listener: 'AI' | 'MESSAGE';
    id: string;
    prompt: string;
    commentReply: string | null;
    dmCount: number;
    commentCount: number;
    automationId: string;
  } | null;
}

export const useMutationData = (
    mutationKey: MutationKey,
    mutationFn: MutationFunction<any, any>,
    queryKey?: string,
    onSuccess?: () => void
) => {
    const client = useQueryClient()
    const { mutate, isPending } = useMutation({
        mutationKey,
        mutationFn,
        onSuccess: (data) => {
            if (onSuccess) onSuccess()
            return toast(data?.status === 200 ? 'Success' : 'Error', {
                description: data.data,
            })
        },
        onSettled: async () => {
            await client.invalidateQueries({ queryKey: [queryKey] })
        },
    })

    return { mutate, isPending }
}

export const useMutationDataState = (mutationKey: MutationKey) => {
    const data = useMutationState({
      filters: { mutationKey, status: 'pending' }, // Only show pending mutations
      select: (mutation) => ({
        variables: mutation.state.variables as AutomationType,
        status: mutation.state.status,
      }),
    })
  
    const latestVariable = data[0] // Only get the first pending mutation
    return { latestVariable }
}