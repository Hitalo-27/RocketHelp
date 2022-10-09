// Arquivo para identificar o que será enviado do firebase para a aplicação
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export type OrderFirestoreDTO = {
    patrimony: string;
    description: string;
    status: 'open' | 'closed';
    solution?:string;
    created_at: FirebaseFirestoreTypes.Timestamp;
    closed_at: FirebaseFirestoreTypes.Timestamp;
}