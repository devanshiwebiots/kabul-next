export const RevenueGrowthData = [
    {
        value: "4,485",
        label: "Current User",
        percentage: "45",
        color: "primary",
    },
    {
        value: "9,660",
        label: "Net Tax",
        percentage: "85",
        color: "secondary",
    },
];

export const ClearInvoicingData = [
    {
        id: "FV 00002/04/2024",
        userName: "Terry Bowen",
        userEmail: "terry.bowen@gmail.com",
        status: "Paid",
        statusClass: "primary",
        amount: "9,492.00",
        dueDate: "May 20, 2024",
    },
    {
        id: "FV 00008/07/2024",
        userName: "Carole Ellis",
        userEmail: "carole.ellis@gmail.com",
        status: "Unpaid",
        statusClass: "secondary",
        amount: "4,942.00",
        dueDate: "March 2, 2024",
    },
    {
        id: "FV 00007/09/2024",
        userName: "Cindy Hoyt",
        userEmail: "cindy.hoyt@gmail.com",
        status: "Paid",
        statusClass: "primary",
        amount: "3,753.00",
        dueDate: "Feb 10, 2024",
    },
    {
        id: "FV 00009/04/2024",
        userName: "Lisa Salazar",
        userEmail: "lisa.salazar@gmail.com",
        status: "Overdue",
        statusClass: "danger",
        amount: "2,452.00",
        dueDate: "May 20, 2024",
    },
];

export const EventDetailsData = [
    {
        title: "Receipt for outer wallet",
        dateTime: "Mar 22, 2024, 4:50pm",
        status: "Completed",
        amount: "244.00",
        iconId: "send",
        bgColor: "primary",
    },
    {
        title: "Process to reimburse to",
        dateTime: "Feb 25, 2024, 2:15pm",
        status: "Pending",
        amount: "948.00",
        iconId: "work-file",
        bgColor: "secondary",
    },
    {
        title: "Delivered to Citizen",
        dateTime: "Jun 10, 2024, 12:40pm",
        status: "Verified",
        amount: "983.00",
        iconId: "graph",
        bgColor: "success",
    },
    {
        title: "Received from #12345",
        dateTime: "Mar 29, 2024, 1:35pm",
        status: "Rejected",
        amount: "949.00",
        iconId: "bookmark-mark",
        bgColor: "danger",
    },
    {
        title: "Fresh day offer added",
        dateTime: "Oct 25, 2024, 2:31pm",
        status: "Verified",
        amount: "442.00",
        iconId: "wallet",
        bgColor: "secondary",
    },
];

export const DutiesTodayData = [
    {
        title: "NFT graphics packages",
        fontClass: "primary",
        name: "Hedvige Bussière",
        image: "8",
    },
    {
        title: "Radio Homepage",
        fontClass: "secondary",
        name: "schneider..",
        images: [
            "9",
            "10",
        ],
    },
    {
        title: "Deliver Dinner Apps",
        fontClass: "warning",
        name: "Stéphane Chasse",
        image: "11",

    },
    {
        title: "Todo Game Layout",
        fontClass: "success",
        name: "Isaac Dennis",
        images: [
            "12",
            "13",
        ],
    },
];

export const FreshUpgradeData = [
    {
        dotClass: "primary",
        title: "Changed product",
        description: "I like to be honest. I dislike things that are staged or fussy.",
    },
    {
        dotClass: "secondary",
        title: "You enjoyed James' items",
        description: "If you have it, you can make things appear good.",
        iconClass: "secondary",
    },
    {
        dotClass: "primary",
        title: "James likes your stuff",
        description: "I enjoy designing anything to do with the body.",
    },
    {
        dotClass: "secondary",
        title: "Jihan Doe just liked your goods",
        description: "Design and style should work toward making you look good and feel good without a lot of effort.",
        iconClass: "primary",
    },
];

export const AllNotificationsData = [
    { image: "5", name: "Vickie Waddell", action: "plans to change", detail: "a Tetris design device", time: "4hrs Ago", buttons: true, active: true, status: "primary" },
    { image: "6", name: "Debra Mendez", action: "Done", detail: "Create a new element", time: "4.20pm", active: true, status: "secondary" },
    { image: "7", name: "Janell G. mentioned you in rewrite button component", time: "3.10pm", last: true, active: false },
];

export const FollowingNotificationsData = [
    { image: "5", name: "John Elliot Started Following you.", time: "25 min Ago", active: true },
    { image: "6", name: "Ashley Hart Requested to Follow ", time: "1w Ago", active: false },
    { image: "7", name: "Anna Iverson Started Following you", time: "4.10pm", active: true },
    { image: "2", name: "Dana Lemon Requested to Follow", time: "15 min Ago", active: false, last: true },
];

export const ArchiveNotificationsData = [
    { image: "5", name: "Ralph Edwards Started Following you.", time: "35 min Ago", active: true },
    { image: "6", name: "Jenny Wilson Requested to Follow", time: "1w Ago", active: false },
    { image: "7", name: "Jenny Wilson Started Following you.", time: "4.10pm", active: true },
    { image: "2", name: "Nasuha Makusta Started Following you.", time: "10 min Ago", active: false, last: true },
];
export const TabsData = [
    { id: "1", title: "All", count: 3, data: AllNotificationsData },
    { id: "2", title: "Following", data: FollowingNotificationsData },
    { id: "3", title: "Archive", data: ArchiveNotificationsData },
];
