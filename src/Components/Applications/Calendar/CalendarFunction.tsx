import { EventClickArg } from "@fullcalendar/core";
import Swal from "sweetalert2";

export const calendarEventClick = (eventClick: EventClickArg) => {
  Swal.fire({
    title: eventClick.event.title,
    html: `
    <div class="table-responsive">
          <table class="table">
              <tbody>
                  <tr>
                      <td>Title</td>
                      <td><strong>${eventClick.event.title}</strong></td>
                  </tr>
              </tbody>
          </table>
    </div>            
      `,
    showCancelButton: true,
    confirmButtonColor: 'var(--theme-default)',
    cancelButtonColor: 'var(--theme-secondary)',
    confirmButtonText: 'Remove Event',
    cancelButtonText: 'Close',
  }).then((result) => {
    if (result.value) {
      eventClick.event.remove();
      Swal.fire('Deleted!', 'Your Event has been deleted.', 'success');
    }
  });
};