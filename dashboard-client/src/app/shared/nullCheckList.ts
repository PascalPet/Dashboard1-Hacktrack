export function isNotNullArray(array: any[]): boolean {
    if (array.length > 0) {
        let dataCheck = false;
        array.forEach(data => {
            if (data !== null) {
                dataCheck = true;
            }
        });
        if (dataCheck) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}