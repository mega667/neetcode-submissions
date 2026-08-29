class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const nextCourses = Array.from(
            { length: numCourses },
            () => []
        );

        const prereqLeft = new Array(numCourses).fill(0);

        for (const [course, prereq] of prerequisites) {
            nextCourses[prereq].push(course);
            prereqLeft[course]++;
        }

        const queue = [];
        for (let course = 0; course < numCourses; course++) {
            if (prereqLeft[course] === 0) {
                queue.push(course);
            }
        }

        let index = 0;
        let completed = 0;
        while (index < queue.length) {
            const course = queue[index++];
            completed++;
            
            for (const nextCourse of nextCourses[course]) {
                prereqLeft[nextCourse]--;

                if (prereqLeft[nextCourse] === 0) {
                    queue.push(nextCourse);
                }
            }
        }

        return completed === numCourses;
    }
}
