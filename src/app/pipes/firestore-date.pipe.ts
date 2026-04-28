import { Pipe, PipeTransform } from '@angular/core';

/**
 * Converts Firestore Timestamp objects to JavaScript Date objects
 * so they can be used with Angular's built-in DatePipe.
 * 
 * Usage: {{ someTimestamp | fsDate | date:'mediumDate' }}
 */
@Pipe({
  name: 'fsDate',
  standalone: true,
})
export class FirestoreDatePipe implements PipeTransform {
  transform(value: any): Date | null {
    if (!value) return null;
    // Firestore Timestamp objects have a toDate() method
    if (value && typeof value.toDate === 'function') {
      return value.toDate();
    }
    // Already a Date
    if (value instanceof Date) return value;
    // String or number
    if (typeof value === 'string' || typeof value === 'number') {
      return new Date(value);
    }
    // Firestore Timestamp-like object with seconds/nanoseconds
    if (value.seconds !== undefined) {
      return new Date(value.seconds * 1000);
    }
    // Handle string representation: "Timestamp(seconds=1776936136, nanoseconds=548000000)"
    if (typeof value === 'string' && value.includes('Timestamp(seconds=')) {
      const match = value.match(/seconds=(\d+)/);
      if (match && match[1]) {
        return new Date(parseInt(match[1]) * 1000);
      }
    }
    return value;
  }
}
